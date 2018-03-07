CREATE TABLE Property (
    /*67G*/
    ID SERIAL PRIMARY KEY,
    Property_Name varchar(255),
    Description varchar(255),
    Address varchar(255),
    City varchar(255),
    State varchar(255),
    Zip varchar(5),
    Url varchar(255),
    Loan varchar(255),
    Monthly_Mortgage varchar(255),
    Recommended_Rent varchar(255),
    Desired_Rent varchar(255),
    User_Id integer references Login(ID)
);