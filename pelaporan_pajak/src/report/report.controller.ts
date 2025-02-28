import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ReportService } from './report.service';
import { Report } from './report.entity';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post('create')
  async create(@Body() report: Report) {
    return this.reportService.create(report);
  }

  @Get()
  async findAll() {
    return this.reportService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() report: Report) {
    return this.reportService.update(id, report);
  }

  @Get('validate/:reportId')
  async validateReport(@Param('reportId') reportId: string) {
    const report = await this.reportService.findOne(reportId);
    return this.reportService.validateReport(report);
  }
}