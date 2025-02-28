import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}

  async create(report: Report): Promise<Report> {
    return this.reportRepository.save(report);
  }

  async findAll(): Promise<Report[]> {
    return this.reportRepository.find();
  }

  async update(id: number, report: Report): Promise<void> {
    await this.reportRepository.update(id, report);
  }

  async validateReport(report: Report): Promise<boolean> {
    return report.reportType !== '';
  }
}