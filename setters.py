# Authentication Registration 
def auth_register(cnx, email, password):
    cursor = None

    try:
        cursor = cnx.cursor(dictionary=True)

        check_email_query = "SELECT * FROM user WHERE email = %s"
        cursor.execute(check_email_query, (email,))
        existing_user = cursor.fetchone()

        if existing_user:
            return False, "Email already registered. Please use a different email or login", None

        query = "INSERT INTO user (email, password) VALUES (%s, md5(%s))"
        cursor = cnx.cursor()
        cursor.execute(query, (email, password))
        cnx.commit()

        return True, "User registered successfully", None
    except Exception as e:
        cnx.rollback()
        return False, f"Error during registration: {e}", "Exception"
    finally:
        if cursor:
            cursor.close()
        if cnx:
            cnx.close()

def insert_transaction(cnx, user_id, transaction_type, category, fixed_cost, amount, date, description):
    cursor = None

    try:
        cursor = cnx.cursor(dictionary=True)

        query = "INSERT INTO transactions (user_id, type, category, fixed_cost, amount, transaction_date, description) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(query, (user_id, transaction_type, category, fixed_cost, amount, date, description,))
        cnx.commit()

        return True, "Transaction successfully added"
    except Exception as e:
        cnx.rollback()
        return False, f"Error during transaction add: {e}"
    finally:
        if cursor:
            cursor.close()
        if cnx:
            cnx.close()