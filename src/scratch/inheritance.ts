class Parent {
  a = 'A'
  b = 5
  constrcutor(){}
  method1 = () => {
    this.method2()
    console.log(`==>inheritance.ts:Parent.method1`, this.a, this.b)
  }
  method2 = () => {
    console.log(`==>inheritance.ts:Parent.method1`, this.a, this.b)

  }
}
class Child extends Parent {
  constructor(){
    super()
    this.a = 'V'
  }
  method2 = () => {
    this.b = 7
    console.log(`==>inheritance.ts:  Child.method2`, this.a, this.b)
  }
}

const child = new Child()
child.method1()