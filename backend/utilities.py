from sqlalchemy.orm import Session
import models, schemas



def get_user(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()


def get_all_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.User):
    db_user = models.User(username=user.username, password=user.password, chips=user.chips)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return


def delete_user(db: Session, username: str):
    db_user = get_user(db, username)
    db.remove(db_user)
    db.commit()
    return


def get_session(db: Session, session_id: str):
    return db.query(models.TableSession).filter(models.TableSession.session_id == session_id).first()


def get_all_sessions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.TableSession).offset(skip).limit(limit).all()


def create_session(db: Session, session: schemas.TableSession):
    db_session = models.TableSession(session_id=session.session_id, user_username=session.user_username)
    db.add(db_session)
    db.commit()
    db.refresh(db_session)
    return


def delete_session(db: Session, session_id: str):
    db_session = get_session(db, session_id)
    db.delete(db_session)
    db.commit()
    return


def delete_all_entries(db: Session):
    users = get_all_users(db);
    sessions = get_all_sessions(db)

    for user in users:
        db.delete(user);

    for session in sessions:
        db.delete(session)

    db.commit();
    return
