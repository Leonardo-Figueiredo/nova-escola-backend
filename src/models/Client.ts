import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clients')
class Client {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column('date')
  dataDeNascimento: Date;
}

export default Client;
