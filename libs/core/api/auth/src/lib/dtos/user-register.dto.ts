'use strict';

import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsPhoneNumber,
  IsOptional
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class UserRegisterDto {
  // @IsString()
  // @IsOptional()
  // @ApiModelProperty()
  // readonly firstName: string;

  // @IsString()
  // @IsOptional()
  // @ApiModelProperty()
  // readonly lastName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly username: string;

  @IsString()
  @MinLength(6)
  @ApiModelProperty({ minLength: 6 })
  readonly password: string;

  // @Column()
  // @IsPhoneNumber('ZZ')
  // @IsOptional()
  // @ApiModelProperty()
  // phone: string;
}
