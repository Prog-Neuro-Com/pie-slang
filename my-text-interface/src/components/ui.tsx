import React, { useState } from 'react';
import * as util from 'util';
import { syntaxParse} from './interpreter/parser';

const TextInterface = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Example function to process input
  const processInput = (text: string): string => {
    return util.inspect(syntaxParse(input), false, null, true)
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    setOutput(processInput(e.target.value));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Input:
          </label>
          <textarea
            value={input}
            onChange={handleInputChange}
            className="w-full h-32 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your input here..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Output:
          </label>
          <div className="w-full h-32 p-2 bg-gray-50 border border-gray-300 rounded-md overflow-auto">
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {output}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextInterface;