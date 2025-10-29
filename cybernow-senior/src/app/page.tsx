import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to French (default locale for Quebec)
  redirect('/fr');
}
