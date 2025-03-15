# CMPSCI-421-Lab2

# Order System
A API that mimics the functions of an ordering system

## **Table of Contents:**
- [INSTALLATION](#installation)
- [API ENDPOINTS](#api-endpoints)
- [TESTING](#testing)
- [SWAGGER UI](#swagger-ui)

## **Installation**
1. Clone this repository:
    ```bash
    git clone https://github.com/mam9265/CMPSCI-421-Lab2
    cd CMPSCI-421-Lab2
    ```
2. Install dependencies:
    ```bash
    npm install express mongoose body-parser
    npm install express swagger-ui-express swagger-jsdoc
    ```
3. Start the server:
    ```bash
    npm start
    ```
4. The API will run on `http://localhost:3000`, and Swagger UI will be available at `http://localhost:3000/api-docs`.

---


## **API ENDPOINTS**

### **1. CREATE AN ITEM**
- **Method:** `Post`
- **URL:** `/items`
- **Request:**
- **Request:**
  ```json
      {
          "name": "Nintendo Switch",
          "description": "The World's Most Popular Gaming Console"
      }
  ```
- **Response (201 Created):**
    ```json
    {
        "_id": "67d4970b759ca25af84775a6",
        "name": "Nintendo Switch",
        "description": "The World's Most Popular Gaming Console"
    }
    ```

---
### **2. GET ALL ITEMS**
- **Method:** `Get`
- **URL:** `/items`
- **Response (200 OK):** 
  ```json
      [
          {
            "_id": "67d4970b759ca25af84775a6",
            "name": "Nintendo Switch",
            "description": "The World's Most Popular Gaming Console"
          }
      ]
  ```
---
### **3. UPDATE AN ITEM**
- **Method:** `Patch`
- **URL:** `/items/:id`
- **Request:**
  ```json
  {
      "name": "Nintendo Switch OLED"
  }
  ```
- **Response (200 OK):**
  ```json
      {
          "_id": "67d4970b759ca25af84775a6",
          "name": "Nintendo Switch OLED",
          "description": "The World's Most Popular Gaming Console"
        }
    ```
  ---
  ### **4. DELETE AN ITEM**
  - **Method:** `Delete`
  - **URL:** `/items/:id`
  - **Response (200 OK):**
    ```json
    {
      "message": "Item deleted"
    }
    ```
  --- 
  ### **5. REPLACE AN ITEM**
  - **Method:**  `Put`
  - **URL:** `/items/:id`
  - **Request:** 
    ```json
    {
      "name": "Nintendo Switch 2",
      "description": "The World's New Most Popular Gaming Console"
    }
    ```
  - **Response (200 OK)**
  ```json
    {
      "_id": "67d4970b759ca25af84775a6",
      "name": "Nintendo Switch 2",
      "description": "The World's New Most Popular Gaming Console"
    }
    ```
  ---

  ### **6. CREATE A CUSTOMER**
  - **Method:** `Post`
  - **URL:** `/customers`
  - **Request:**
    ```json
    {
      "name": "Michael Myers",
      "email": "MoeMyers54@yahoo.com",
      "address": "80 Lincoln Ave, Grove City PA"
    }
    ```
    **Response (201 Created):**
    ```json
    {
      "_id": "67d4cc6fdb5dd84a30f76790",
      "name": "Michael Myers",
      "email": "MoeMyers54@yahoo.com",
      "address": "80 Lincoln Ave, Grove City PA"
    }
    ```
  ---
  ### **7. DELETE A CUSTOMER**
  - **Method:** `Delete`
  - **URL:** `/customers/:id`
  - **Response (200 OK):**
    ```json
    {
      "message": "Customer deleted"
    }
    ```
  --- 
  ### **8. UPDATE A CUSTOMER**
  - **Method;** `Patch`
  - **URL:** `/customers/:id`
  - **Request**
  ```json
    {
      "name": "Michael A Myers"
    }
    ```
  - **Response (200 OK):**
    ```json
    {
      "_id": "67d4cc6fdb5dd84a30f76790",
      "name": "Michael A Myers",
      "email": "MoeMyers54@yahoo.com",
      "address": "80 Lincoln Ave, Grove City PA"
    }
    ```
  ---

  ### **9. CREATE AN ORDER**
  - **Method:** `Post`
  - **URL:** `/orders`
  - **Request:**
    ```json
    [
        {
          "customerId": "67d5d92df7bc29017f9b0792",
              "items": [
                "Nintendo Switch"
              ],
          "totalAmount": 299.99
        }
    ] 
    ```
  - **Response (201 Created):**
    ```json
    [
        {
            "customerId": "67d5d92df7bc29017f9b0792",
                "items": [
                    "Nintendo Switch"
                ],
            "totalAmount": 299.99,
            "status": "pending",
            "_id": "67d5db2cf7bc29017f9b0797"
        }
    ]
    ```

  ---
  ### **10. GET ALL ORDERS**
  - **Method:** `Get`
  - **URL:** `/orders`
  - **Response (200 OK)**
  ```json
    [
      {
        "customerId": "67d4cc6fdb5dd84a30f76790",
        "items": [
          "Nintendo Switch"
        ],
        "totalAmount": 299.99,
        "status": "pending"
      }
    ]  
    ```
  ---
  ### **11. UPDATE AN ORDER**
  - **Method:** `Patch`
  - **URL:** `/orders/:id`
  - **Request:**
   ```json
    {
      "status": "completed"
    }
    ```
  - **Response: (200 OK)**
  ```json
    {
      "customerId": "67d4cc6fdb5dd84a30f76790",
      "items": [
        "Nintendo Switch"
      ],
      "totalAmount": 299.99,
      "status": "completed"
    }
    ```
  ---
  ### **12 DELETE AN ORDER**
  - **Method:** `Delete`
  - **URL:** `/orders/:id`
  - **Response (200 OK):**
    ```json
    {
      "message": "Order deleted"
    }
    ```
  --- 
    ### **13. Process Order (Asynchronous Operation)**
  - **Method:** `Get`
  - **URL:** `/orders/process-order`
  - **Response (200 OK, after 3s delay):**
     ```json
      {
        "message": "Order processed successfully!"
      }
      ```
  ---
  ### **14. PROCESS A PAYMENT**
  - **Method:** `Post`
  - **URL:** `/payments`
  - **Request:**
    ```json
      {
        "orderId": "67d4e27e2166595715e81c14"
      }
      ```
  - **Response (200 OK)**
    ```json
      {
        "message": "Order was finished",
        "order": {
        "_id": "67d4e27e2166595715e81c14",
        "customerId": "67d4cc6fdb5dd84a30f76790",
        "status": "completed"
        }
      }
      ```
  ---

## **Testing**  

### **1. Using Postman**
- Open **Postman** and create a new request.
- Enter the API URL (e.g., `http://localhost:3000/items`).
- Choose the request method (`GET`, `POST`, etc.).
- Add JSON body (for `POST` or `PATCH` requests).
- Send the request and check the response.

### **2. Writing Unit Tests (Jest & Supertest)**
We can write simple **unit tests** using **Jest** and **Supertest**.

#### **A. Install Jest and Supertest**
Run the following command to install testing dependencies:
```bash
npm install --save-dev jest supertest
  ```
Run the tests with
```bash
npm test -- --detectOpenHandles
  ```
---

## **Swagger UI**
- Swagger UI can be found: [Here](http://localhost:3000/api-docs)
