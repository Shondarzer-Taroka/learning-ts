
// enum numeric data
enum UserRequest{
    ReadData=9,
    GetData,
    SaveData,
    DeleteData
}
console.log(UserRequest['ReadData']);
console.log(UserRequest.GetData);

// string enum

enum UserRequest2{
    BookData='Book_data',
    RollData='Roll_data',
    SalleryData='Sallery_data',
    FeesData='Fees_data',
}

console.log(UserRequest2.SalleryData);


// heterogenious

enum UserRequest3{
    id=3453232,
    Name='Mobile_shop',
    Book_data='Book_Name'
}

console.log(UserRequest3.Book_data);


 enum Vresi{
    Name='hom',
    Value='POl'
 }

 console.log(Vresi);
 