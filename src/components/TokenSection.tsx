import React from 'react';
import { Coins, Trophy, Users, Wallet } from 'lucide-react';
import TokenCard from './TokenCard';
import Button from './Button';

export default function TokenSection() {
  return (
    <div className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black text-white mb-8">
            VAULT Token Economics
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The VAULT token powers our ecosystem, providing exclusive access to premium features
            and rewards for active community members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TokenCard
            icon={<Wallet className="w-16 h-16" />}
            title="Membership Access"
            description="Stake VAULT tokens for premium gym membership tiers"
          />
          <TokenCard
            icon={<Trophy className="w-16 h-16" />}
            title="Performance Rewards"
            description="Earn tokens by achieving fitness milestones"
          />
          <TokenCard
            icon={<Users className="w-16 h-16" />}
            title="Community Governance"
            description="Vote on facility upgrades and new features"
          />
          <TokenCard
            icon={<Coins className="w-16 h-16" />}
            title="Token Utility"
            description="Use tokens for merchandise, supplements, and training"
          />
        </div>

        <div className="mt-24 text-center">
          <Button className="text-xl px-12 py-6">
            View Tokenomics
          </Button>
        </div>
      </div>
    </div>
  );
}