import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewPasswordColumn1710831718784 implements MigrationInterface {
    name = 'AddNewPasswordColumn1710831718784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`passWord\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`passWord\``);
    }

}
