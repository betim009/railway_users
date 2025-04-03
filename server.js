const app = require('./app');
const pool = require('./connection'); // Certifique-se de que está importando o pool corretamente

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`A conexão está sendo executada na porta ${PORT}`);

    try {
        const connection = await pool.getConnection(); // Pegando uma conexão do pool
        const [result] = await connection.query('SELECT 1');
        connection.release(); // Liberando a conexão de volta para o pool

        console.log('Conexão ao BD feita com sucesso!', result);
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
});
