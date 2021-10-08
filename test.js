const bcrypt = require('bcrypt')

const pass = 'khiem2k1';

const ha = async () => {
    const hashed = await bcrypt.hash(pass,8);
    console.log( await bcrypt.compare(pass,'$2b$08$1.Ub/pm05VbgYKzPllbdm.Ru6/Ix8ij0.ZBbAgFkXK5NhODWGYbJm'))
}
ha()
