
### 📕 DB Schema

```mermaid
erDiagram

    users {
        int id PK
        dateTime created_at
        dateTime updated_at
        varchar email
        text password_hash
        text password_salt
    }
    
    user_details ||--|| users : user_id
    user_details {
        int id PK
        dateTime created_at
        dateTime updated_at
        varchar role    
        int user_id FK
    }

    beasts_classes {
        int id PK
        dateTime created_at
        dateTime updated_at
        varchar name
    }
    
    weaknesses {
        int id PK
        dateTime created_at
        dateTime updated_at
        varchar name
    }
    
    drops {
        int id PK
        dateTime created_at
        dateTime updated_at
        varchar name
    }
    
    locations {
        int id PK
        dateTime created_at
        dateTime updated_at
        varchar name
    }
    
    beasts ||--|| beasts_classes : beast_class_id
    beasts {
        int id PK
        dateTime created_at
        dateTime updated_at
        varchar name
        int beast_class_id FK
    }
    
    beast_details ||--|| beasts : beast_id
    beast_details {
        int id PK
        dateTime created_at
        dateTime updated_at
        text description
        text in_game_description
        varchar imgLink
        text tactic_description
    }
    
    beast_details_to_drops }|--|| beast_details : beast_details_id
    beast_details_to_drops }|--|| drops : drops_id
    beast_details_to_drops {
        int id PK
        dateTime created_at
        dateTime updated_at
        int beast_details_id FK
        int drops_id FK
    }
    
    beast_details_to_locations }|--|| beast_details : beast_details_id
    beast_details_to_locations }|--|| locations : location_id
    beast_details_to_locations {
        int id PK
        dateTime created_at
        dateTime updated_at
        int beast_details_id FK
        int location_id FK
    }
    
    beast_details_to_weaknesses }|--|| beast_details : beast_details_id
    beast_details_to_weaknesses }|--|| weaknesses : weakness_id
    beast_details_to_weaknesses {
        int id PK
        dateTime created_at
        dateTime updated_at
        int beast_details_id FK
        int weakness_id FK
    }

```