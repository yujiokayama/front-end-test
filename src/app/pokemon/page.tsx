"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "@/types/types";
import {
  Container,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  const fetchPokemon = (name: string) => {
    setLoading(true);
    setError(null);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("ポケモンが見つかりませんでした");
        setLoading(false);
      });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      fetchPokemon(search);
    }
  };

  useEffect(() => {
    fetchPokemon("pikachu");
  }, []);

  return (
    <Container maxWidth="sm">
      <form
        onSubmit={handleSearch}
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <TextField
          label="ポケモンの名前を入力"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
        >
          検索
        </Button>
      </form>

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {pokemon && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {pokemon.name}
            </Typography>
            <CardMedia
              component="img"
              image={pokemon.sprites.front_default}
              alt={pokemon.name}
              style={{ width: "150px", height: "150px", margin: "0 auto" }}
            />
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default App;
