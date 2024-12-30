'use client'; 
import { useEffect, useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Bonjour');
    } else {
      setGreeting('Bonsoir');
    }
  }, []);

  return (
    <div>
      <h1>{greeting}, Bienvenue sur mon Portfolio</h1>
      <p>Je suis un développeur passionné par la création de solutions web modernes.</p>
    </div>
  );
}
