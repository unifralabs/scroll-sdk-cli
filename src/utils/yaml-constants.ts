import { DumpOptions } from 'js-yaml'

/**
 * Unified YAML dump options for all YAML files in the project
 * Ensures consistent formatting across all configuration files
 */
export const YAML_DUMP_OPTIONS: DumpOptions = {
  lineWidth: -1,
  noRefs: true,
  quotingType: '"',
  forceQuotes: true,
}
