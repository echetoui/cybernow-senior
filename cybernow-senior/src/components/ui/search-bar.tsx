"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  className?: string;
  autoFocus?: boolean;
  size?: "sm" | "md" | "lg";
}

export function SearchBar({
  placeholder = "Rechercher...",
  onSearch,
  onClear,
  className,
  autoFocus = false,
  size = "md"
}: SearchBarProps) {
  const [query, setQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const sizeClasses = {
    sm: "h-9 text-sm",
    md: "h-11 text-base", 
    lg: "h-14 text-lg"
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onClear) {
      onClear();
    }
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSearch} className={cn("relative", className)}>
      <div className="relative flex items-center">
        {/* Search Icon */}
        <Search 
          className={cn(
            "absolute left-3 text-muted-foreground pointer-events-none",
            isFocused && "text-primary"
          )}
          size={iconSize[size]}
          aria-hidden="true"
        />
        
        {/* Input Field */}
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={cn(
            "w-full rounded-cybernow border border-input bg-background pl-12 pr-12",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-all duration-200",
            sizeClasses[size],
            isFocused && "border-primary shadow-cybernow"
          )}
          aria-label="Champ de recherche"
        />

        {/* Clear Button */}
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 h-8 w-8 p-0 hover:bg-muted"
            aria-label="Effacer la recherche"
          >
            <X size={iconSize[size] - 4} />
          </Button>
        )}
      </div>

      {/* Search Button (visually hidden but accessible) */}
      <Button
        type="submit"
        className="sr-only"
        disabled={!query.trim()}
      >
        Rechercher
      </Button>
    </form>
  );
}

/**
 * Variante compacte pour le header
 */
export function HeaderSearchBar({ 
  className,
  onSearch 
}: { 
  className?: string;
  onSearch?: (query: string) => void;
}) {
  return (
    <SearchBar
      placeholder="Rechercher des ressources..."
      onSearch={onSearch}
      size="sm"
      className={cn("max-w-xs", className)}
    />
  );
}

/**
 * Variante pleine largeur pour les pages
 */
export function PageSearchBar({ 
  className,
  onSearch,
  placeholder = "Que recherchez-vous ?"
}: { 
  className?: string;
  onSearch?: (query: string) => void;
  placeholder?: string;
}) {
  return (
    <SearchBar
      placeholder={placeholder}
      onSearch={onSearch}
      size="lg"
      autoFocus
      className={cn("max-w-2xl mx-auto", className)}
    />
  );
}