import React, { useState } from "react"
//import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
//import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { Box, SimpleGrid } from "@chakra-ui/react"
import { Text, Center } from '@chakra-ui/react'


import './ContadorResponsive.css'

const ContadorResponsive = () => {

     const [contador, setContador] = useState(0)   
   //console.log(contador)
   function incrementar(){
      if (contador < 10) {
         setContador(contador+1)
      } 
   }
   function decrementar(){
      if (contador > 0) {
        setContador(contador-1)
      }
    }
  return (
   <div>
      <SimpleGrid  spacingX='2px' spacingY='2px' columns={1} >
          <Center>
          <Box bg='tomato' width='400px'>
           <Center>
           <Text color="gray.200" as="b">Presione para aumentar el contador</Text>
           </Center>
          </Box>
          </Center>
          <Center>    
      <Box bg='tomato' width='400px' padding="1px">
       <Center>
         <Text>El número es contador: </Text><Text as="mark" padding="3px"> {contador}</Text>
       </Center>  
     </Box>
     </Center>
     <Center>
     <Box bg='tomato' width='400px'> 
        <ButtonGroup spacing='3' padding="10px">
        <Button ml="60px" colorScheme='blue' variant='outline' onClick={incrementar} disabled={contador === 10?"disabled":""}>Incrementa</Button>
        <Button colorScheme='blue' variant='outline' onClick={decrementar} disabled={contador === 0?"disabled":""}>Decrementa</Button>  
        </ButtonGroup>
      </Box>
      </Center>
      </SimpleGrid>
       

   </div>
  )
}
//{/*<button onClick={()=>setContador(contador+1)}>Incrementa 2</button>*/}
export { ContadorResponsive }