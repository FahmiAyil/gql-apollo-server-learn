const { makeExecutableSchema } = require('graphql-tools');

const animedata = [
    {
        id: 1,
        title: 'One Piece',
        mascot: 'Mugiwara (Straw Hat)',
        synopsis: 'This anime is adventure of 8 crewmates to get One Piece',
        genre: {
            id: 2,
            desc: 'Comedy'
        }
    },
    {
        id: 2,
        title: 'Naruto',
        mascot: 'Orange-suit',
        synopsis: 'Naruto is a ninja and he want to be Hokage (leader of the village)',
        genre: {
            id: 1,
            desc: 'Adventure'
        }
    },
    {
        id: 4,
        title: 'Great Teacher Onizuka',
        mascot: 'Yo!!!!',
        synopsis: 'Onizuka is a teacher that teach with heart and punch LOL',
        genre: {
            id: 2,
            desc: 'Comedy'
        }
    },
    {
        id: 5,
        title: 'Bleach',
        mascot: 'Orange-hair',
        synopsis: 'Bleach is shinigami that bleaching evil and ghost',
        genre: {
            id: 4,
            desc: 'Magic'
        }
    },
    {
        id: 6,
        title: 'Kuroko no Basuke',
        mascot: 'Basket Ball',
        synopsis: 'Kuroko no basuke is sport anime that do basket ball with effort',
        genre: {
            id: 3,
            desc: 'Sport'
        }
    },
    {
        id: 7,
        title: 'Megalo Box',
        mascot: 'Gearless',
        synopsis: 'This is boxing anime that do boxing in Megalonia Tournament',
        genre: {
            id: 3,
            desc: 'Sport'
        }
    },
    {
        id: 8,
        title: 'Steins Gate',
        mascot: 'Microwave Teleportation',
        synopsis: 'Steins Gate is time-machine-based anime that can traveling the time',
        genre: {
            id: 5,
            desc: 'Sci-Fi'
        }
    },
    {
        id: 9,
        title: 'Boruto',
        mascot: 'White Eyes',
        synopsis: 'Boruto is son of naruto that want to get more power to beat an evil',
        genre: {
            id: 1,
            desc: 'Adventure'
        }
    },
];

// The GraphQL schema in string form
const typeDefs = `
    type Query { 
        animes: [Anime]
        getAnime(id: Int!): Anime
    }
    type Anime { 
      id: Int!, 
      title: String,
      mascot: String,
      synopsis: String,
      genre(id: Int, desc: String): Genre
    }
    type Genre {
        id: Int!,
        desc: String
    }
    
`;

// The resolvers
const resolvers = {
    Query: { 
        animes: () => {
            return animedata;
        },
        getAnime: (root, args) => {
            return animedata.filter((data) => {
                return data.id == args.id
            })[0]
        }
    },
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema