// enum numeric data
var UserRequest;
(function (UserRequest) {
    UserRequest[UserRequest["ReadData"] = 9] = "ReadData";
    UserRequest[UserRequest["GetData"] = 10] = "GetData";
    UserRequest[UserRequest["SaveData"] = 11] = "SaveData";
    UserRequest[UserRequest["DeleteData"] = 12] = "DeleteData";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest['ReadData']);
console.log(UserRequest.GetData);
// string enum
var UserRequest2;
(function (UserRequest2) {
    UserRequest2["BookData"] = "Book_data";
    UserRequest2["RollData"] = "Roll_data";
    UserRequest2["SalleryData"] = "Sallery_data";
    UserRequest2["FeesData"] = "Fees_data";
})(UserRequest2 || (UserRequest2 = {}));
console.log(UserRequest2.SalleryData);
// heterogenious
var UserRequest3;
(function (UserRequest3) {
    UserRequest3[UserRequest3["id"] = 3453232] = "id";
    UserRequest3["Name"] = "Mobile_shop";
    UserRequest3["Book_data"] = "Book_Name";
})(UserRequest3 || (UserRequest3 = {}));
console.log(UserRequest3.Book_data);
var Vresi;
(function (Vresi) {
    Vresi["Name"] = "hom";
    Vresi["Value"] = "POl";
})(Vresi || (Vresi = {}));
console.log(Vresi);
