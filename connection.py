import os
import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host=os.getenv("MYSQL_PUBLIC_HOST"),
        user=os.getenv("MYSQLUSER"),
        password=os.getenv("MYSQLPASSWORD"),
        database=os.getenv("MYSQL_WALLET_DATABASE"),
        port=int(os.getenv("MYSQL_PUBLIC_PORT", 38454))
    )
