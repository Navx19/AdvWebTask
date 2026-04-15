import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Min } from "class-validator";
import { Type } from "class-transformer";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name : string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNotEmpty()
    @IsPositive()
    @Type(() => Number)
    price : number;

    @IsInt()
    @Min(0)
    @IsOptional()
    @Type(() => Number)
    stock?: number;

    @IsString()
    @IsNotEmpty()
    category! : string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}