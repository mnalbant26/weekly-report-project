/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { WeeklyResearchReport } from './types';
import { AI_INFERENCE_REPORT } from './data/sampleReports';
import { Navbar } from './components/Navbar';
import { ExecutiveDashboard } from './components/ExecutiveDashboard';
import { DayByDayView } from './components/DayByDayView';
import { SynthesisView } from './components/SynthesisView';
import { CreatorStudio } from './components/CreatorStudio';
import { PresentationSlideMode } from './components/PresentationSlideMode';
import { StandaloneExporterModal } from './components/StandaloneExporterModal';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [report, setReport] = useState<WeeklyResearchReport>(AI_INFERENCE_REPORT);
  const [activeView, setActiveView] = useState<'dashboard' | 'days' | 'synthesis' | 'creator' | 'editor'>('dashboard');
  const [selectedDayId, setSelectedDayId] = useState<string>('day-mon');
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [presentationSlideIndex, setPresentationSlideIndex] = useState(0);
  const [exporterOpen, setExporterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<'fetched' | 'local' | 'edited'>('local');

  // Dynamically fetch from data.json
  const loadDataFromJson = useCallback(async () => {
    setIsLoading(true);
    setFetchError(null);
    try {
      // Attempt fetching from /data.json
      const response = await fetch('/data.json', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Failed to load data.json (HTTP ${response.status})`);
      }
      const data: WeeklyResearchReport = await response.json();
      setReport(data);
      setDataSource('fetched');
      if (data.days && data.days.length > 0) {
        setSelectedDayId(data.days[0].id);
      }
    } catch (err: any) {
      console.warn('Could not fetch external data.json, using built-in high-fidelity sample:', err);
      setFetchError(err.message || 'Error fetching data.json');
      setReport(AI_INFERENCE_REPORT);
      setDataSource('local');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDataFromJson();
  }, [loadDataFromJson]);

  const handleUpdateReport = (updated: WeeklyResearchReport) => {
    setReport(updated);
    setDataSource('edited');
  };

  const handleResetDefaults = () => {
    setReport(AI_INFERENCE_REPORT);
    setDataSource('local');
  };

  const handleSelectDay = (dayId: string) => {
    setSelectedDayId(dayId);
    setActiveView('days');
  };

  const handleOpenPresentationWithIndex = (dayIndex: number) => {
    // slide 0 is title, slide 1 is stats, dayIndex starts at slide 2
    setPresentationSlideIndex(2 + dayIndex);
    setPresentationOpen(true);
  };

  const handleOpenPresentation = () => {
    setPresentationSlideIndex(0);
    setPresentationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      
      {/* Top Navigation Bar */}
      <Navbar
        report={report}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenPresentation={handleOpenPresentation}
        onOpenExporter={() => setExporterOpen(true)}
        onRefreshData={loadDataFromJson}
        isLoading={isLoading}
        dataSource={dataSource}
      />

      {/* Fetch status notice banner if any error occurred */}
      {fetchError && (
        <div className="bg-amber-950/60 border-b border-amber-800/60 px-4 py-2 text-xs text-amber-300 flex items-center justify-between">
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Loaded built-in baseline dataset. (Tip: When deployed with your customized <code className="bg-amber-900/60 px-1.5 py-0.5 rounded font-mono">public/data.json</code>, it syncs automatically).
            </span>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {activeView === 'dashboard' && (
          <ExecutiveDashboard
            report={report}
            onSelectDay={handleSelectDay}
            onOpenPresentation={handleOpenPresentation}
            onGoToSynthesis={() => setActiveView('synthesis')}
            onGoToCreator={() => setActiveView('creator')}
          />
        )}

        {activeView === 'days' && (
          <DayByDayView
            days={report.days}
            selectedDayId={selectedDayId}
            onSelectDay={setSelectedDayId}
            onOpenPresentationWithIndex={handleOpenPresentationWithIndex}
          />
        )}

        {activeView === 'synthesis' && (
          <SynthesisView
            report={report}
            onOpenPresentation={() => {
              setPresentationSlideIndex(2 + report.days.length);
              setPresentationOpen(true);
            }}
          />
        )}

        {activeView === 'creator' && (
          <CreatorStudio
            report={report}
            onUpdateReport={handleUpdateReport}
            onResetDefaults={handleResetDefaults}
            onExportStandalone={() => setExporterOpen(true)}
          />
        )}

        {activeView === 'editor' && (
          <CreatorStudio
            report={report}
            onUpdateReport={handleUpdateReport}
            onResetDefaults={handleResetDefaults}
            onExportStandalone={() => setExporterOpen(true)}
          />
        )}

      </main>

      {/* Fullscreen Presentation Slide Deck Modal */}
      {presentationOpen && (
        <PresentationSlideMode
          report={report}
          initialSlideIndex={presentationSlideIndex}
          onClose={() => setPresentationOpen(false)}
        />
      )}

      {/* Standalone Single File Exporter Modal */}
      {exporterOpen && (
        <StandaloneExporterModal
          report={report}
          onClose={() => setExporterOpen(false)}
        />
      )}

      {/* Persistent Presenter Footer Bar */}
      <footer className="border-t border-slate-900 bg-slate-950/90 py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-400">Weekly Research Presentation Dashboard</span>
            <span>•</span>
            <span>Dynamic JSON-Driven Engine</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setExporterOpen(true)}
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Export Standalone index.html
            </button>
            <span>•</span>
            <button
              onClick={handleOpenPresentation}
              className="text-slate-400 hover:text-slate-200 font-medium transition-colors"
            >
              Launch Slides (F)
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
