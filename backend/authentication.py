import bcrypt, secrets



def generate_byte_password(plain_password: str) -> bytes:
    return plain_password.encode("utf-8")


def generate_hashed_password(plain_password: str) -> bytes:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(generate_byte_password(plain_password), salt)


def verify_passwords(plain_password: str, hashed_password: bytes) -> bool:
    return bcrypt.checkpw(generate_byte_password(plain_password), hashed_password)


def generate_session_token() -> str:
    return secrets.token_hex(16)
