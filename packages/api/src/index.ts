import cors from 'cors';
import express from 'express';
import router from './routes';

const app = express();
const PORT = 3001;

app.use(cors());
// cors middleware to enable needed cors headers in server responses
// would pull this out and make a white list of who can request before launching app into the wild
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
