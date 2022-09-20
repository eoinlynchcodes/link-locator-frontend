import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function CreateAccountPage() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const handleChange = (e) =>
    setLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://apidemo.swissai.com/api/v1/login?username=${login.username}&password=${login.password}`
      )
      .then((response) => {
        localStorage.setItem("auth_key", `${response.data.auth_key}`);
        navigate("/management");
      })
      .catch((error) => {
        setErrors(error);
      });
  };

  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,
      });
    }
  };

  return (
    <Container
      maxW="lg"
      py={{
        base: "12",
        md: "24",
      }}
      px={{
        base: "0",
        sm: "8",
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: "sm",
              })}
            >
              Create your account
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={useBreakpointValue({
            base: "transparent",
            sm: "bg-surface",
          })}
          boxShadow={{
            base: "none",
            sm: useColorModeValue("md", "md-dark"),
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="username">Full Name:</FormLabel>
                <Input
                  id="username"
                  type="username"
                  name="username"
                  value={login.username}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="username">Username:</FormLabel>
                <Input
                  id="username"
                  type="username"
                  name="username"
                  value={login.username}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      variant="link"
                      aria-label={isOpen ? "Mask password" : "Reveal password"}
                      onClick={onClickReveal}
                    />
                  </InputRightElement>
                  <Input
                    id="password"
                    value={login.password}
                    name="password"
                    type={isOpen ? "text" : "password"}
                    autoComplete="current-password"
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormControl>
            </Stack>
            {errors && (
              <Text color="red">
                The username or password entered is incorrect. Please try again.
              </Text>
            )}
            <HStack justify="space-between">
              <Button
                variant="link"
                colorScheme="blue"
                size="sm"
                onClick={onClickReveal}
              >
                See password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="solid" colorScheme="red" onClick={onSubmit}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
