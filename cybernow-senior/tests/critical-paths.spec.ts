import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Critical User Paths', () => {
  test.beforeEach(async ({ page }) => {
    // Start from French homepage
    await page.goto('/fr');
  });

  test('Navigation and contact flow', async ({ page }) => {
    // Test main navigation
    await expect(page.getByRole('heading', { name: /votre bouclier numérique/i })).toBeVisible();
    
    // Test phone number click-to-call
    const phoneButton = page.getByRole('link', { name: /appeler maintenant/i }).first();
    await expect(phoneButton).toBeVisible();
    await expect(phoneButton).toHaveAttribute('href', /tel:/);
    
    // Navigate to contact page
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page.getByRole('heading', { name: /nous contacter/i })).toBeVisible();
    
    // Test contact form
    await page.getByLabel(/nom complet/i).fill('Test User');
    await page.getByLabel(/numéro de téléphone/i).fill('514-555-0123');
    await page.getByLabel(/votre message/i).fill('Test message for automated testing');
    
    // Submit form (but don't actually send in test)
    const submitButton = page.getByRole('button', { name: /envoyer le message/i });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  test('Services exploration', async ({ page }) => {
    // Navigate to services
    await page.getByRole('link', { name: 'Services' }).click();
    await expect(page.getByRole('heading', { name: /nos services/i })).toBeVisible();
    
    // Check all service cards are present
    await expect(page.getByText(/bouclier proactif/i)).toBeVisible();
    await expect(page.getByText(/vie privée & consentements/i)).toBeVisible();
    await expect(page.getByText(/aide aux démarches/i)).toBeVisible();
    await expect(page.getByText(/soutien en cas d'arnaque/i)).toBeVisible();
    
    // Test service detail page navigation
    await page.getByRole('link', { name: /en savoir plus/i }).first().click();
    
    // Should reach a service detail page
    await expect(page.url()).toContain('/services/');
  });

  test('Language switching', async ({ page }) => {
    // Switch to English
    await page.getByRole('button', { name: /switch to english/i }).click();
    
    // Verify English content
    await expect(page.getByRole('heading', { name: /your digital shield/i })).toBeVisible();
    await expect(page.url()).toContain('/en');
    
    // Switch back to French
    await page.getByRole('button', { name: /changer pour le français/i }).click();
    
    // Verify French content
    await expect(page.getByRole('heading', { name: /votre bouclier numérique/i })).toBeVisible();
    await expect(page.url()).toContain('/fr');
  });

  test('Accessibility controls', async ({ page }) => {
    // Test text size controls
    const increaseButton = page.getByRole('button', { name: /augmenter la taille du texte/i });
    const decreaseButton = page.getByRole('button', { name: /diminuer la taille du texte/i });
    
    await expect(increaseButton).toBeVisible();
    await expect(decreaseButton).toBeVisible();
    
    // Test increasing text size
    await increaseButton.click();
    await increaseButton.click();
    
    // Verify maximum reached (button should be disabled)
    await expect(increaseButton).toBeDisabled();
    
    // Test decreasing
    await decreaseButton.click();
    await expect(increaseButton).toBeEnabled();
  });

  test('Emergency contact features', async ({ page }) => {
    // Go to alerts page
    await page.getByRole('link', { name: 'Alertes' }).click();
    
    // Test report scam button
    const reportButton = page.getByRole('button', { name: /signaler une arnaque/i }).first();
    await expect(reportButton).toBeVisible();
    
    // Test emergency phone number
    const emergencyPhone = page.getByRole('link', { name: /appeler maintenant/i }).first();
    await expect(emergencyPhone).toHaveAttribute('href', /tel:/);
  });
});

test.describe('Accessibility Tests', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/fr');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('keyboard navigation works correctly', async ({ page }) => {
    await page.goto('/fr');
    
    // Test skip link
    await page.keyboard.press('Tab');
    const skipLink = page.getByText(/aller au contenu principal/i);
    await expect(skipLink).toBeFocused();
    
    // Test main navigation with keyboard
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Should focus on main navigation
    await expect(page.getByRole('link', { name: 'Accueil' })).toBeFocused();
  });

  test('form accessibility', async ({ page }) => {
    await page.goto('/fr/contact');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('form')
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
    
    // Test form labels and error handling
    const nameInput = page.getByLabel(/nom complet/i);
    const phoneInput = page.getByLabel(/numéro de téléphone/i);
    
    await expect(nameInput).toBeVisible();
    await expect(phoneInput).toBeVisible();
    
    // Test required field validation
    await page.getByRole('button', { name: /envoyer le message/i }).click();
    
    // Should show validation errors
    await expect(page.getByText(/le nom est requis/i)).toBeVisible();
  });
});