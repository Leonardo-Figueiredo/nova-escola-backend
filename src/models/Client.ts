import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clients')
class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column('date')
  dataDeNascimento: Date;
}

export default Client;
