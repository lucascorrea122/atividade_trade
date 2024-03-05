import { app } from './app';

const port = 3003;
const server = app.listen(port, () =>{
    console.log('Server Iniciado!!!');
});


process.on('SIGINT', () => {
    server.close();
    console.log('Closed Server')
});