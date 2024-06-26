import { Box, chakra, Container, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react'

interface StatsCardProps {
  title: string
  stat: string
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

export const Statistics: React.FC = () => {
  return (
    <Container maxW="Full" background="blue.50" pb={8}>
      <Box maxW="7xl" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
          What is our school doing?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'We teach'} stat={'1,000 students'} />
          <StatsCard title={'In'} stat={'30 classrooms'} />
          <StatsCard title={'Who speak'} stat={'20 teachers'} />
        </SimpleGrid>
      </Box>
    </Container>
  )
}
