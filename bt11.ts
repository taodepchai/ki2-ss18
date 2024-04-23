function limitedMemoizedDecorator(limit: number) {
    let cache: any[] = []; 

    return function(value: any): any {
        

        if (cache.indexOf(value) !== -1) {
            console.log(`Retrieves result from cache, no additional log`); 
            return value;
        }
        console.log(`log the calculation steps for lib: ${value}`); 
        cache.push(value);

        if (cache.length > limit) {
            cache.shift(); // Xóa phần tử đầu tiên ra khỏi mảng
        }

        return value;
    };
}

const memoizedFunc = limitedMemoizedDecorator(3);

memoizedFunc(3); 
memoizedFunc(3); 
memoizedFunc(7); 
memoizedFunc(2); 
