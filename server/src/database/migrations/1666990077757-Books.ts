import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Books1666990077757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "title",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "author",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "concluded_at",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "rate",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "status",
                        type: "varchar",
                        default: "'Quero ler'"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books")
    }

}