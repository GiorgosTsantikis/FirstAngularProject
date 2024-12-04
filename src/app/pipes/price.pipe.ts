import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'PricePipe'
})
export class PricePipe implements PipeTransform{
    transform(value: number):string {
        return `${value}.0€`
    }
}