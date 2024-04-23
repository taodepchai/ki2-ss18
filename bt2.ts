function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        let startTime = performance.now(); 

        let result = originalMethod.apply(this, args);
        let endTime = performance.now(); 

        let executionTime = endTime - startTime;
        console.log(`thoi gian thuc thi: ${executionTime} milliseconds`);


        return result; 
    };

    return descriptor;
}


class MyClass {
    @timingDecorator
    myMethod(a: number, b: number): number {
        return a + b;
    }
}

let myInstance = new MyClass();
myInstance.myMethod(2, 3); 
