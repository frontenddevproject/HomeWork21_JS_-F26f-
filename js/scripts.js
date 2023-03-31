
function MyClass (a, privateArguments) {
   this.a = a;
   
    const keysArray = privateArguments.reduce((acc, el, i, arr) => {
      let data = Object.keys(Object.values(arr)[i]).join();
      if(!acc.includes(data)){
         acc.push(data);   
      }
      return acc;
   }, [])
   for(let i = 0; i < privateArguments.length; i++){
   // if ()
   }
	console.log(keysArray)
   console.log(Object.keys(Object.values(privateArguments)))


//  Еще в разработке, до конца дня сделаю


   // console.log(Object.keys(Object.values(privateArguments)[2]));
   // privateArguments.forEach((obj) => {
   //   const key = Object.keys(obj)[0];
   //   const value = Object.values(obj)[0];
   //   // this[key] = value
   //   Object.defineProperty(this, key, {value: value, enumerable: false, writable: false});
   // }) 
   // return this;

}

const instanceClass = new MyClass(10, [{private: "private"}, {private: "private2"}, {private2: "private2"},{private2: "private2"}]);

console.log(instanceClass, "instance");