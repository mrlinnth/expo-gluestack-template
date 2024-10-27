import { Stack } from 'expo-router';

import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Box className="h-80 justify-center">
          <VStack space="md" reversed={false}>
            <Heading>I am a Heading</Heading>
            <Text>Hello World!</Text>
            <Box className="h-20 w-20 bg-primary-400">
              <Text className="text-white">A box</Text>
            </Box>
            <Button size="md" variant="solid" action="primary">
              <ButtonText>Primary Button</ButtonText>
            </Button>
          </VStack>
        </Box>

        <ScreenContent path="app/(drawer)/index.tsx" title="Home" />
      </Container>
    </>
  );
}
