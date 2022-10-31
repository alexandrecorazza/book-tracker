import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"

@Entity("books")
export class Book {
    @PrimaryColumn()
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    title: string;

    @Column({ type: 'varchar' })
    author: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @CreateDateColumn({ type: 'timestamp' })
    concluded_at: Date;

    @Column({ type: 'int', nullable: true })
    rate: number;

    @Column({ type: 'varchar', default: 'Quero ler' })
    status: string;
}