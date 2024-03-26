import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewUserNameColumn1711137392426 implements MigrationInterface {
    name = 'AddNewUserNameColumn1711137392426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userName\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userName\``);
    }

}
