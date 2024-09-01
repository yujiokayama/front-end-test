import { test, expect } from '@playwright/test';
import { Pokemon } from '@/types/types';

test("コダックしか勝たん", async ({ page }) => {
  const mockemon: Pokemon = {
    id: 54,
    name: 'psyduck',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png'
    }
  }

  await page.route('https://pokeapi.co/api/v2/pokemon/greninja', async route => {
    await route.fulfill({ json: mockemon });
  });

  await page.goto('http://localhost:3000/pokemon');

  await expect(page.getByText('psyduck')).toBeVisible();
});
