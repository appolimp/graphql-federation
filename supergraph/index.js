const { readFileSync } = require('fs');

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { ApolloGateway } = require('@apollo/gateway');

const supergraphSdl = readFileSync('./supergraph.graphql').toString();

async function startApolloServer() {
    const gateway = new ApolloGateway({
        supergraphSdl,
    });

    const server = new ApolloServer({
        gateway,
    });

    const { url } = await startStandaloneServer(server, { port: 4000 });
    console.log(`🚀  Server ready at ${url}`);
}

startApolloServer();