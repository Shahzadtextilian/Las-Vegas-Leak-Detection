import React from 'react';

interface LinkRule {
  phrase: string;
  targetSlug: string; // '' for '/', 'water-leak-detection', 'blog/how-to-get-lvvwd-leak-credit-water-bill', etc.
  href: string;
}

const LINK_RULES: LinkRule[] = [
  // Core Brand Hub
  { phrase: 'Las Vegas Leak Detection Services', targetSlug: '', href: '/' },

  // Core Service Pillars
  { phrase: 'swimming pool leak detection', targetSlug: 'pool-leak-detection', href: '/pool-leak-detection/' },
  { phrase: 'water leak detection', targetSlug: 'water-leak-detection', href: '/water-leak-detection/' },
  { phrase: 'slab leak detection', targetSlug: 'slab-leak-detection', href: '/slab-leak-detection/' },
  { phrase: 'pool leak detection', targetSlug: 'pool-leak-detection', href: '/pool-leak-detection/' },
  { phrase: 'gas leak detection', targetSlug: 'gas-leak-detection', href: '/gas-leak-detection/' },
  { phrase: 'underground leak detection', targetSlug: 'underground-leak-detection', href: '/underground-leak-detection/' },
  { phrase: 'emergency leak repair', targetSlug: 'emergency-leak-repair', href: '/emergency-leak-repair/' },

  // Supporting Topical Cluster Articles
  {
    phrase: '24-hour bucket test',
    targetSlug: 'blog/how-swimming-pool-bucket-test-works',
    href: '/blog/how-swimming-pool-bucket-test-works/'
  },
  {
    phrase: 'bucket test',
    targetSlug: 'blog/how-swimming-pool-bucket-test-works',
    href: '/blog/how-swimming-pool-bucket-test-works/'
  },
  {
    phrase: 'LVVWD 50% leak credits',
    targetSlug: 'blog/how-to-get-lvvwd-leak-credit-water-bill',
    href: '/blog/how-to-get-lvvwd-leak-credit-water-bill/'
  },
  {
    phrase: 'LVVWD 50% leak credit',
    targetSlug: 'blog/how-to-get-lvvwd-leak-credit-water-bill',
    href: '/blog/how-to-get-lvvwd-leak-credit-water-bill/'
  },
  {
    phrase: '50% leak credit',
    targetSlug: 'blog/how-to-get-lvvwd-leak-credit-water-bill',
    href: '/blog/how-to-get-lvvwd-leak-credit-water-bill/'
  },
  {
    phrase: 'LVVWD leak credit',
    targetSlug: 'blog/how-to-get-lvvwd-leak-credit-water-bill',
    href: '/blog/how-to-get-lvvwd-leak-credit-water-bill/'
  },
  {
    phrase: 'water meter test',
    targetSlug: 'blog/how-to-read-water-meter-for-hidden-leaks',
    href: '/blog/how-to-read-water-meter-for-hidden-leaks/'
  },
  {
    phrase: 'LVVWD water meter',
    targetSlug: 'blog/how-to-read-water-meter-for-hidden-leaks',
    href: '/blog/how-to-read-water-meter-for-hidden-leaks/'
  },
  {
    phrase: 'overhead PEX re-route',
    targetSlug: 'blog/post-tension-slab-leak-repair-las-vegas-pex-reroute',
    href: '/blog/post-tension-slab-leak-repair-las-vegas-pex-reroute/'
  },
  {
    phrase: 'overhead PEX reroute',
    targetSlug: 'blog/post-tension-slab-leak-repair-las-vegas-pex-reroute',
    href: '/blog/post-tension-slab-leak-repair-las-vegas-pex-reroute/'
  },
  {
    phrase: 'red-tag',
    targetSlug: 'blog/southwest-gas-meter-red-tag-pressure-test-las-vegas',
    href: '/blog/southwest-gas-meter-red-tag-pressure-test-las-vegas/'
  },
  {
    phrase: 'caliche soil',
    targetSlug: 'blog/desert-caliche-soil-pipe-damage',
    href: '/blog/desert-caliche-soil-pipe-damage/'
  },
  {
    phrase: 'caliche rock',
    targetSlug: 'blog/desert-caliche-soil-pipe-damage',
    href: '/blog/desert-caliche-soil-pipe-damage/'
  },

  // Las Vegas Neighborhood Hubs
  { phrase: 'Northwest Las Vegas', targetSlug: 'las-vegas', href: '/las-vegas/' },
  { phrase: 'Lone Mountain', targetSlug: 'las-vegas', href: '/las-vegas/' },
  { phrase: 'Centennial Hills', targetSlug: 'centennial-hills', href: '/centennial-hills/' },
  { phrase: 'Skye Canyon', targetSlug: 'centennial-hills', href: '/centennial-hills/' },
  { phrase: 'Downtown Las Vegas', targetSlug: 'downtown-las-vegas', href: '/downtown-las-vegas/' },
  { phrase: 'Silverado Ranch', targetSlug: 'paradise-enterprise', href: '/paradise-enterprise/' },
  { phrase: 'Enterprise', targetSlug: 'paradise-enterprise', href: '/paradise-enterprise/' },
  { phrase: 'Paradise', targetSlug: 'paradise-enterprise', href: '/paradise-enterprise/' },
  { phrase: 'Spring Valley', targetSlug: 'spring-valley-center', href: '/spring-valley-center/' },
  { phrase: 'The Lakes', targetSlug: 'the-lakes', href: '/the-lakes/' },
  { phrase: 'Peccole Ranch', targetSlug: 'the-lakes', href: '/the-lakes/' },
  { phrase: 'Spanish Trail', targetSlug: 'spanish-trail', href: '/spanish-trail/' },
  { phrase: 'Summerlin South', targetSlug: 'summerlin-south', href: '/summerlin-south/' },
  { phrase: 'Rhodes Ranch', targetSlug: 'rhodes-ranch', href: '/rhodes-ranch/' },
];

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Links up to `maxLinks` distinct semantic targets inside a text block,
 * skipping self-links (`currentSlug`) and avoiding duplicate links to the same URL.
 */
export function linkifyText(
  text: string,
  currentSlug: string,
  onNavigate: (slug: string) => void,
  maxLinks = 3
): React.ReactNode {
  if (!text) return text;

  interface MatchSpan {
    start: number;
    end: number;
    matchedText: string;
    rule: LinkRule;
  }

  const chosenSpans: MatchSpan[] = [];
  const usedTargets = new Set<string>();

  for (const rule of LINK_RULES) {
    if (chosenSpans.length >= maxLinks) break;
    if (rule.targetSlug === currentSlug) continue;
    if (usedTargets.has(rule.targetSlug)) continue;

    const regex = new RegExp(`\\b(${escapeRegExp(rule.phrase)})\\b`, 'i');
    const match = regex.exec(text);
    if (!match || match.index === undefined) continue;

    const start = match.index;
    const end = start + match[0].length;

    // Ensure no overlap with an already-selected span
    const overlaps = chosenSpans.some(
      (s) => (start >= s.start && start < s.end) || (end > s.start && end <= s.end) || (start <= s.start && end >= s.end)
    );
    if (overlaps) continue;

    chosenSpans.push({
      start,
      end,
      matchedText: match[0],
      rule,
    });
    usedTargets.add(rule.targetSlug);
  }

  if (chosenSpans.length === 0) {
    return text;
  }

  chosenSpans.sort((a, b) => a.start - b.start);

  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  chosenSpans.forEach((span, idx) => {
    if (span.start > cursor) {
      nodes.push(text.slice(cursor, span.start));
    }
    nodes.push(
      <a
        key={`${span.rule.targetSlug}-${idx}`}
        href={span.rule.href}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(span.rule.targetSlug);
        }}
        className="text-[#1E70B8] hover:text-[#0F2942] underline underline-offset-2 font-medium transition-colors cursor-pointer"
      >
        {span.matchedText}
      </a>
    );
    cursor = span.end;
  });

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return <>{nodes}</>;
}
