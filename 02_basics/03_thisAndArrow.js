const course = {
    coursename: "JS Padh",
    courseprice: 9999,
    iscompleted: false,
    welcome: function(){
        console.log(`${this.coursename} at ${this.courseprice} rupees`)
        console.log(this);
    }
}
course.welcome()
