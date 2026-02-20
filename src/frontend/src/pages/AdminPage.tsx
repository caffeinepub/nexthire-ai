import { useAllLeads } from '../hooks/useQueries';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Loader2 } from 'lucide-react';

export default function AdminPage() {
  const { data: leads, isLoading, isError } = useAllLeads();

  const formatDate = (timestamp: bigint) => {
    // Convert nanoseconds to milliseconds
    const milliseconds = Number(timestamp / 1_000_000n);
    const date = new Date(milliseconds);
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-foreground/70">View all form submissions from the Leads collection</p>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-3 text-foreground/70">Loading submissions...</span>
          </div>
        )}

        {isError && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <p className="text-destructive font-medium">Failed to load submissions</p>
            <p className="text-destructive/70 text-sm mt-1">Please try refreshing the page</p>
          </div>
        )}

        {!isLoading && !isError && leads && leads.length === 0 && (
          <div className="bg-muted/50 border border-border rounded-lg p-12 text-center">
            <p className="text-foreground/70 text-lg">No submissions yet</p>
            <p className="text-foreground/50 text-sm mt-2">Form submissions will appear here once users sign up</p>
          </div>
        )}

        {!isLoading && !isError && leads && leads.length > 0 && (
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Full Name</TableHead>
                  <TableHead className="font-semibold">Email</TableHead>
                  <TableHead className="font-semibold">Country</TableHead>
                  <TableHead className="font-semibold">Target Job Role</TableHead>
                  <TableHead className="font-semibold">Submission Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead, index) => (
                  <TableRow key={`${lead.email}-${index}`}>
                    <TableCell className="font-medium">{lead.fullName}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.country}</TableCell>
                    <TableCell>{lead.targetJobRole || '-'}</TableCell>
                    <TableCell className="text-foreground/70">
                      {formatDate(lead.createdAt)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {!isLoading && !isError && leads && leads.length > 0 && (
          <div className="mt-4 text-sm text-foreground/60 text-center">
            Total submissions: {leads.length}
          </div>
        )}
      </div>
    </div>
  );
}
