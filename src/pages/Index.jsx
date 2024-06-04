import { useState, useEffect } from "react";
import { Container, Box } from "@chakra-ui/react";

const Index = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
        break;
      case "ArrowDown":
        setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
        break;
      case "ArrowLeft":
        setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
        break;
      case "ArrowRight":
        setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box position="relative" width="400px" height="400px" border="1px solid black">
        <Box position="absolute" width="50px" height="50px" bg="blue.500" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
      </Box>
    </Container>
  );
};

export default Index;
