## Authentication
Explain why each system fails, and how to guard against that failure:

- Plaintext passwords
If hacked, hackers can easily read plaintext passwords, and use them for other sites of victim (because people usually use the same password across various applications). Plaintext passwords need to be encrypted.

- Encrypted passwords
If hackers obtain the decryption key, they can easily decrypt all passwords in database. Encryption is reversible, because passwords are not destroyed. Encrypted passwords need to be hashed.

- Hashed passwords
Although hashing is lossy, and thus irreversible, they are vulnerable to rainbow tables (hashed passwords generated from commonly-used passwords using a popular hashing algorithm). So you should add a salt (some pseudorandom information) to the password, before it's hashed.
