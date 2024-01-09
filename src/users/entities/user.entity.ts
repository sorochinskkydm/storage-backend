import { ApiProperty } from "@nestjs/swagger";
import { FileEntity } from "src/files/entities/file.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: "Почта пользователя" })
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @OneToMany(() => FileEntity, (file) => file.user)
  files: FileEntity[];
}
