"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function applyMiddleware(...middlewares) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let modifiedArgs = args;
            middlewares.forEach(middleware => {
                modifiedArgs = middleware(modifiedArgs);
            });
            const result = originalMethod.apply(this, modifiedArgs);
            return result;
        };
        return descriptor;
    };
}
class Example6 {
    static exampleFunction(a, b) {
        console.log(`Received parameters: ${a}, ${b}`);
        return a + b;
    }
}
__decorate([
    applyMiddleware(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Example6, "exampleFunction", null);
console.log(Example6.exampleFunction(2, 3));
