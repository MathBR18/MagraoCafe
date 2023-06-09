import { useState } from 'react';
import FormAccount from "./components/FormAccount";
import FormAddress from "./components/FormAddress";
import FormPersonalDetails from "./components/FormPersonalDetails";
import * as C from "@chakra-ui/react";
import Step from "./components/Step";

function App() {
  const [step, setStep] = useState(1);

  const getCompStep = () => {
    switch (step) {
      case 1:
        return <FormAccount />;
      case 2:
        return <FormPersonalDetails />;
      case 3:
        return <FormAddress />;
      default:
        return <FormAccount />;
    }
  };

  const Steps = [1, 2, 3];

  const [formContent, setFormContent] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleEnviar() {
    setFormContent({});
    setStep(1);
    setSubmitted(true);
  }

  return (
    <>
      <C.Box bg="background: rgb(47,24,1);
      background: linear-gradient(90deg, rgba(47,24,1,1) 0%, rgba(101,53,5,1) 34%, rgba(117,62,7,1) 100%);" 
      color="white"
      display="flex"
      justifyContent="space-between" 
      alignItems="center"
      py={4}>
        <C.Text fontSize="2xl" fontWeight="semibold" textAlign="center" marginLeft="40px" onClick={() => window.location.reload()} cursor="pointer">
          Magrão Café
        </C.Text>
        <C.Text fontSize="2xl" fontWeight="semibold" textAlign="center" marginRight="40px">
          Sobre Nós
        </C.Text>
      </C.Box>
      <C.Flex h="100vh" align="center" justify="center">
        <C.Center maxW={500} w="100%" py={10} px={2} flexDir="column">
          {submitted ? (
            <C.Text fontSize="xl" fontWeight="bold" textAlign="center">
              Parabéns! Cadastro efetuado com sucesso.
            </C.Text>
          ) : (
            <>
             <C.Box mb={10}>
                <C.Text fontSize="4xl" fontWeight="bold" textAlign="center">
                  Cadastre-se
                </C.Text>
              </C.Box>
              <C.HStack spacing={4}>
                {Steps.map((item) => (
                  <Step key={item} index={item} active={step === item} />
                ))}
              </C.HStack>

              <C.Divider my={4} borderColor="blackAlpha.700" />


              <C.Box w="80%">{getCompStep()}</C.Box>

              <C.HStack spacing={10} mt={4}>
                <C.Button
                  bg="gray.300"
                  onClick={() => {
                    if (step > 1) {
                      setStep(step - 1);
                    }
                  }}
                  disabled={step === 1}
                >
                  Voltar
                </C.Button>
                <C.Button
                  colorScheme="black" bg="blackAlpha.900"
                  onClick={step === 3 ? handleEnviar : () => setStep(step + 1)}
                >
                  {step === 3 ? "Enviar" : "Próximo"}
                </C.Button>
              </C.HStack>
            </>
          )}
        </C.Center>
      </C.Flex>
      {/* Rodapé */}
      <C.Box
        bg="background: rgb(47,24,1);
        background: linear-gradient(90deg, rgba(47,24,1,1) 0%, rgba(101,53,5,1) 34%, rgba(117,62,7,1) 100%);"
        color="white"
        px={4}
        py={4}
        fontWeight="bold"
        textAlign="center"
        fontSize="sm"
        borderTop="1px solid"
        borderColor="gray.200"
        position="absolute"
        bottom={0}
        left={0}
        right={0}
      >
        Desenvolvido por Magrão Café © 2023
      </C.Box>

    </>
  );
}

export default App;
