import axios from 'axios';

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  try {
    console.log('before axios');
    res.status(200).send('Hello');
    // axios
    //   .get(
    //     'http://external.horizonwebref.com/scheduleExternal.hwr?asn=206098&enc=a374281e1326d868c25a2314936b52c006dce21a&primary=FFFFFF&secondary=000000&gc=42337',
    //     {
    //       headers: {
    //         'User-Agent':
    //           'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36',
    //       },
    //     }
    //   )
    //   .then((r) => {
    //     console.log('Got a response!', r);
    //     //res.status(200).send(r.data);
    //   })
    //   .catch((e) => {
    //     console.log('Uh oh');
    //     //res.status(500).send(`Something went wrong: ${e}`);
    //   });
  } catch (e) {
    console.log('OH MAN SHIT FUCKED UP');
    res.status(500).send(`Something went wrong: ${e}`);
  }
  console.log('Way after axios');
};
