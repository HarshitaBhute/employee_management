const express = require('express');
const cors = require('cors');
require('dotenv').config();

const auth = require('./middleware/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',        require('./routes/authRoutes'));
app.use('/api/employees',   auth, require('./routes/employeeRoutes'));
app.use('/api/departments', auth, require('./routes/departmentRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));